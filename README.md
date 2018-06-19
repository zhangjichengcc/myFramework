# create by zhangjicheng 
# 项目布局

├── dist                                        // webpack打包文件             
├── node_modules                                // 依赖包             
├── src                                         // 源码目录             
│   ├── components                              // 组件             
│   │                
│   ├── css                                     // 样式文件（后期用sass代替）             
│   │   ├── common.css             
│   │   └── ...                                          
│   ├── img                                     // 公共图片             
│   ├── font                                    // 字体文件             
│   ├── methods                                 // 常用方法类             
│   │   ├── Date.js                             // 时间方法             
│   │   ├── Type.js                             // 类型检测及转换             
│   │   └── ...                                  
│   ├── page                                    // 页面             
│   │   ├── home                                            
│   │   └── ...                                                                 
│   ├── router                                               
│   │   └── router.js                           // 路由配置             
│   ├── store                                   // vuex的状态管理             
│   │   ├── index.js                            // 引用vuex，创建store             
│   │   └── ...                                 // 配置mutations             
│   ├── templates                               // 组件             
│   │   ├── index.html                                      
│   │   ├── list.html                                      
│   │   └── ...             
│   ├── index.vue                               // 页面入口文件             
│   ├── app.js                                  // 程序入口文件，加载各种公共组件             
│             
├── index.html                                  // 入口html文件             
             



#webpack --watch  实时监听   
