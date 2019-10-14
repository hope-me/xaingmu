//结合axios使用注意  
//get形式
//get(loginApi,{params:{pagesize,pagenum}})
//post形式
//get(loginApi,{pagesize,pagenum})



//注册接口
let regApi = `http://jx.xuzhixiang.top/ap/api/reg.php`
//  username,password



//登录接口
let loginApi = `http://jx.xuzhixiang.top/ap/api/login.php`
//  username,password


//添加商品
let productAddApi = `http://jx.xuzhixiang.top/ap/api/goods/goods-add.php`
//  pname,pimg,pprice,pdesc,uid



//查看商品
let productCheckApi = `http://jx.xuzhixiang.top/ap/api/allproductlist.php`
//  pagesize,pagenum,uid



//删除商品
let productDelApi = `http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php`
//  pid,uid,token


//通过ID获取商品
let getProductApi = `http://jx.xuzhixiang.top/ap/api/detail.php`
// id   但是pid


//修改商品
let productUpdateApi = `http://jx.xuzhixiang.top/ap/api/goods/goods-update.php`
//  pname,pimg,pprice,pdesc,pid


//查看商品
let productListApi = `http://jx.xuzhixiang.top/ap/api/productlist.php`
//  uid



//购物车添加商品
let cartAddApi = `http://jx.xuzhixiang.top/ap/api/add-product.php`
//  uid,pid,pnum



//查询购物车商品
let cartCheckApi = `http://jx.xuzhixiang.top/ap/api/cart-list.php`
//  id 但是uid



//更新购物车商品
let cartUndataApi = `http://jx.xuzhixiang.top/ap/api/cart-update-num.php`
//  uid,pid,pnum



//删除购物车商品
let cartDeleteApi = `http://jx.xuzhixiang.top/ap/api/cart-delete.php`
//  uid,pid