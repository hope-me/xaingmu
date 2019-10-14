let host = 'http://106.13.115.175:8080/elleshop'

//注册接口
let reApi = host + '/user/register.do'
//参数：password phone

//登录接口
let loginApi = host + '/user/login.do'
//参数：password phone


//品牌查找
let articleApi = host + '/findAllBrand'
//参数：sortType 排序方式
//查找品牌时，根据查询类型排序；输入参数严格按照以下命名；popular:热门。brandName：品牌名按A-Z。category：分类。style：风格。area ：地区


//类别控制器
let sortApi = host + '/category/categoryList.do'
//没有参数，查找所有品类


//商品类型控制器
let typeApi = host + '/goodsType/findGoodsTypeById.do'
//参数：goodsTypeId （商品 id）
//根据ID查询到单个商品的信息


//用户优惠券控制器
let couponApi = host + '/userCoupons/addCoupons.do'
//参数：couponsId(优惠券id)

//时尚头条
let fashionApi = host + '/headline/showHeadline.do'