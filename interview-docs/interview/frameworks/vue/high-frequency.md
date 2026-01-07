# 1. Vue2 和 Vue3 响应式原理有什么区别？🌟

[Vue2 和 Vue3 响应式原理的核心区别](https://juejin.cn/post/7554911110219169844)

[Vue2 vs Vue3：核心原理与性能优化详解](https://blog.csdn.net/2403_88459347/article/details/144214871)
[Vue2 和 Vue3 的差异化（通俗易懂） - LT 先生 - 博客园](https://www.cnblogs.com/ltwlh/p/18939770)

Vue2 和 Vue3 的响应式系统是其核心特性之一，但两者在底层实现上有显著差异，分别基于 Object.defineProperty 和 Proxy 实现。这种差异不仅影响性能，还决定了开发体验和功能扩展能力。

Vue2 的响应式原理

Vue2 使用 Object.defineProperty 实现响应式，通过为对象的每个属性定义 getter 和 setter 来拦截数据访问和修改。

```js
function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      console.log(`获取属性 ${key}`);
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        console.log(`设置属性 ${key} 为 ${newVal}`);
        val = newVal;
        // 触发更新逻辑
      }
    },
  });
}
```

优点：

兼容性好，支持 IE9+。

API 稳定，经过长期验证。

缺点：

无法监听属性的新增和删除，需通过 $set 和 $delete 手动处理。

数组的变异方法需要特殊处理。

对嵌套对象需递归遍历，初始化性能较差。

Vue3 的响应式原理

Vue3 使用 Proxy 实现响应式，代理整个对象，提供更全面的拦截能力。

```js
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      console.log(`获取属性 ${key}`);
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      console.log(`设置属性 ${key} 为 ${value}`);
      return Reflect.set(target, key, value, receiver);
    },
    deleteProperty(target, key) {
      console.log(`删除属性 ${key}`);
      return Reflect.deleteProperty(target, key);
    },
  });
}
```

优点：

支持动态添加和删除属性。
性能更优，尤其是处理大型对象时。
支持 Map、Set 等新数据类型。
无需特殊处理数组操作。

缺点：

不支持 IE 浏览器。

学习曲线相对陡峭。

两者的对比

Vue2 的响应式系统适合需要兼容旧浏览器的场景，但在性能和灵活性上存在局限。Vue3 的响应式系统通过 Proxy 提供了更强大的功能和更高的性能，尤其适合现代化的复杂项目开发。

# 2. vue 组件的通信⽅式有哪些？🌟

[Vue 组件间通信六种方式（完整版）](https://juejin.cn/post/6844903845642911752)
[Vue 组件间的通信方式（多种场景，通俗易懂，建议收藏）](https://blog.csdn.net/qq_41809113/article/details/120384336)
[超详细的 vue 组件之间通讯的 8 种方式](https://blog.csdn.net/weixin_70134200/article/details/131660464)
在 Vue.js 中，组件是最强大的功能之一，但由于组件实例的作用域是相互独立的，不同组件之间的数据无法直接引用。为了实现组件之间的通信，Vue 提供了多种方式，适用于不同的场景。

父子组件通信

父组件向子组件传值 (Props)

父组件可以通过 props 向子组件传递数据。父组件在子组件标签上使用 v-bind 绑定数据，子组件通过 props 接收。例如：

```js
<!-- 父组件 -->
<template>
 <div>
   <child :message="parentMessage"></child>
 </div>
</template>
<script>
import Child from './Child.vue';
export default {
 components: { Child },
 data() {
   return {
     parentMessage: 'Hello from Parent'
   };
 }
};
</script>
<!-- 子组件 -->
<template>
 <div>{{ message }}</div>
</template>
<script>
export default {
 props: {
   message: String
 }
};
</script>
```

子组件向父组件传值 ($emit)

子组件可以通过 $emit 触发自定义事件，向父组件传递数据。父组件通过 v-on 监听子组件的事件。例如：

```js
<!-- 子组件 -->
<template>
 <button @click="sendMessage">Send Message</button>
</template>
<script>
export default {
 methods: {
   sendMessage() {
     this.$emit('messageSent', 'Hello from Child');
   }
 }
};
</script>
<!-- 父组件 -->
<template>
 <div>
   <child @messageSent="receiveMessage"></child>
   <p>{{ receivedMessage }}</p>
 </div>
</template>
<script>
import Child from './Child.vue';
export default {
 components: { Child },
 data() {
   return {
     receivedMessage: ''
   };
 },
 methods: {
   receiveMessage(message) {
     this.receivedMessage = message;
   }
 }
};
</script>
```

兄弟组件通信

事件总线 (Event Bus)

通过创建一个空的 Vue 实例作为事件总线，可以实现兄弟组件之间的通信。例如：

```js
// eventBus.js
import Vue from 'vue';
export const EventBus = new Vue();
// 组件A
<template>
 <button @click="sendMessage">Send Message to B</button>
</template>
<script>
import { EventBus } from './eventBus';
export default {
 methods: {
   sendMessage() {
     EventBus.$emit('messageSent', 'Hello from A');
   }
 }
};
</script>
// 组件B
<template>
 <p>{{ message }}</p>
</template>
<script>
import { EventBus } from './eventBus';
export default {
 data() {
   return {
     message: ''
   };
 },
 created() {
   EventBus.$on('messageSent', (msg) => {
     this.message = msg;
   });
 }
};
</script>
```

跨级组件通信

Provide/Inject

provide 和 inject 允许祖先组件向其所有子孙后代注入依赖，不论组件层次有多深。例如：

```js
// 祖先组件
<!-- 祖先组件 -->
<template>
 <div>
   <child></child>
 </div>
</template>
<script>
export default {
 provide() {
   return {
     message: 'Hello from Ancestor'
   };
 }
};
</script>
<!-- 子孙组件 -->
<template>
 <p>{{ message }}</p>
</template>
<script>
export default {
 inject: ['message']
};
</script>
```

# 3. Vue3 相对应于 Vue2 来说有哪些提升？

Vue3 相比 Vue2 在性能方面的提升

[Vue3 相比 Vue2 在性能方面的提升](https://juejin.cn/post/7484161772229984283)
[面试官：Vue3.0 性能提升主要是通过哪几方面体现的？ | web 前端 …](https://vue3js.cn/interview/vue3/performance.html)
[简述 vue3 相比 vue2 有哪些改进性能提升   更快的渲染速度：Vue3 …](https://juejin.cn/post/7475152106665984039)

Vue3 在性能上相较于 Vue2 有显著的优化，主要体现在以下几个方面：

响应式系统升级 Vue3 使用了基于 Proxy 的响应式系统，替代了 Vue2 的 Object.defineProperty。这种改进不仅提升了性能，还支持更多的数据结构（如 Map、Set），并能动态监听属性的新增和删除，而无需深度遍历对象。

编译优化 Vue3 在编译阶段引入了多项优化措施：

静态节点提升：将模板中的静态内容提取为常量，避免重复创建节点。

Patch Flag 标记：动态节点只追踪变化的部分，减少虚拟 DOM 的比对范围。

事件监听缓存：对事件绑定进行缓存，避免每次重新追踪变化。

SSR 优化：大规模静态内容通过 innerHTML 直接渲染，减少对象创建的开销。

Tree-shaking 支持 Vue3 通过 Tree-shaking 技术，仅打包实际使用的功能模块，未使用的 API（如 v-model、transition）不会被引入，从而显著减少打包体积。Vue3 核心库压缩后仅约 10KB，而 Vue2 为约 23KB。

更快的渲染速度 通过上述优化，Vue3 在运行时减少了虚拟 DOM 的比对和内存占用，显著提升了渲染性能，尤其在大型应用中表现尤为突出。

总结 Vue3 通过架构革新和编译优化，不仅提升了运行效率，还降低了内存开销和包体积，是现代化前端开发的更优选择。
