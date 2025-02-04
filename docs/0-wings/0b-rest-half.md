---
isOriginal: true
icon: linter
category:
  - 神翼
  - 规范
---

# 0B.RestHalf规范

场景化业务的URL命名规范，参考了RESTFul和GraphQL，适用于无法资源化的业务，故取名叫`RestHalf`。

## 0B.1.业务场景化

在`RestHalf`实践中，业务的复杂性主要来自于 ①业务自身在演化 ②人员认知在涌现。

* 做着做着，东西就变了，从轮子做到了自行车，这是演化
* 写着写着，思路清晰了，从摸象到最后摸全了，这是涌现

在技术领域，没有银弹。wings实践注重场景化，任一方案都必须在具体场景中讨论。

* RESTFul的不够用在于其简单，而资源仅是业务的参与者之一
* GraphQL的不好用在于其万能，问题尚未分解，只是多一种QL

对于复杂的东西，唯有分解，对于变化的东西，唯有适应。
所谓场景化，就是把变化切片，固定上下文和寻找确定性，通常从以下方面入手。

* 资源 - 数据流，任何资源都有唯一id，即便是从属关系
* 事件 - 业务流，事件触发数据的产生，变化和消失
* 功能 - 场景框，输入了什么，输出了什么，限定了界限

场景化应遵循以下原则，以便容易跟上变化，容易分解和理解。

* 能简单，就不要复杂。不要创造概念，持续奥卡姆"剃头"
* 能强关联，就不要弱关联。多路径时使用关键/强路径
* 能明示，就不要暗示。限定边界/输入/输出/异常

## 0B.2.请求能POST，就别GET

除了资源类型，及特定场景用GET外，全部使用POST

* 无POST环境的，如邮件中的下载 `/label/res-id-{tk}.pdf`
* 约定重定向的，如SSO/OAuth登录，需要多次302
* 静态资源，如图片，样式等。

此外，因GET请求全部信息都在URL中（cookie外），可被历史及缓存，
所以，任何敏感的请求，都必须有token防护，如次数，期限，权限等。

抽象化及资源化，容易有歧义，且与场景化原则略有冲突，因此建议全POST。

## 0B.3.传参能Head/Body，就别path/query

考虑到网关/切面处理，排错分析等，保持path及query参数简洁。

* path参数，最好没有或只有1个，超过1个时，需要考虑必要性
* query string，应仅限功能参数，如分页及简单搜索
* 业务参数，应封装在Http body中，如Json
* 会话参数，应封装在Http Header中，如Token

## 0B.4.网址要明确身份，有前缀和后缀

场景化中，每个URL都是具体的角色，有其家族和职业。

* 前缀如，业务类别`admin`，版本号`v1`等
* 后缀如，应答内容扩展名`.pdf`
* 从后往前做时，建议与项目分包一致
* 从前往后做时，建议与页面功能一致
