import config from './config';

const url = {};
// Categories Url
url.getallGCategories = `${config.baseUrl}category/gCategory/get/all`;
url.getallPCategories = `${config.baseUrl}category/pCategory/get/all`;
url.getallCategories = `${config.baseUrl}category/category/get/all`;
url.getallDpCategories = `${config.baseUrl}category/DpCategory/get/all`;
// Features Url
url.featuredCategories = `${config.baseUrl}category/featured/get/all`;
url.featuredBrands = `${config.baseUrl}brand/featured/get/all`;
url.featuredProducts = `${config.baseUrl}product/featured/get/all`;
url.featuredCourses = `${config.baseUrl}course/featured/get/all`;
url.featuredInstructors = `${config.baseUrl}instructor/featured/get/all`;
// Banners Url
url.banners = `${config.baseUrl}banner/get/all`;
// Campaigns Url
url.categoryCampaign = `${config.baseUrl}category/campaign/get/all`;
url.brandCampaign = `${config.baseUrl}brand/campaign/get/all`;
url.productCampaign = `${config.baseUrl}product/campaign/get/all`;
// Products Url
url.getAllProducts = `${config.baseUrl}product/get/all`;
url.getProductDetails = `${config.baseUrl}product/get/details`;
// Courses Url
url.getAllCourses = `${config.baseUrl}course/get/all`;
url.getCourseDetails = `${config.baseUrl}course/get/details`;
url.getUserCourses = `${config.baseUrl}course/user`;
url.getAllInstructor = `${config.baseUrl}instructor/get/all`;

// course booking
url.courseBooking = `${config.baseUrl}course/payment/booking`;
url.courseCardOrder = `${config.baseUrl}course/payment/card`;
url.courseBkashOrder = `${config.baseUrl}course/payment/bkash`;
url.courseBkashExecute = `${config.baseUrl}course/payment/execute/`;
url.courseBkashCancel = `${config.baseUrl}course/payment/cancel/`;
// Posts Url
url.getAllPosts = `${config.baseUrl}post/get/all`;
url.viewCounter = `${config.baseUrl}post/view`;
url.postLikes = `${config.baseUrl}post/like/store`;
url.postComment = `${config.baseUrl}post/comment`;
url.shareCounter = `${config.baseUrl}post/share`;
url.editComment = `${config.baseUrl}post/comment/update`;
url.deleteComment = `${config.baseUrl}post/comment/delete`;
// Auth / User Url
url.auth = `${config.baseUrl}user/store`;
url.authVerify = `${config.baseUrl}user/verify`;
url.userInfo = `${config.baseUrl}user/info`;
url.userLogout = `${config.baseUrl}user/logout`;
// cart url
url.getCartProducts = `${config.baseUrl}product/cart`;
// get countries
url.getCountries = `${config.baseUrl}address/country/get/all`;
url.getStates = `${config.baseUrl}address/state/info`;
url.getCities = `${config.baseUrl}address/city/info`;
url.getThanas = `${config.baseUrl}address/thana/info`;
url.getPostCodes = `${config.baseUrl}address/postcode/info/thana`;
// store shipping address url
url.storeShippingAddress = `${config.baseUrl}address/shipping/store`;
url.getShippingAddress = `${config.baseUrl}address/shipping/user`;
// product order
url.productOrderByCod = `${config.baseUrl}product/order/cod`;
url.productOrderBkash = `${config.baseUrl}product/order/bkash`;
url.productOrderBkashExecute = `${config.baseUrl}product/order/bkash/execute/`;
url.productOrderBkashCancel = `${config.baseUrl}product/order/bkash/cancel/`;
// user token api
url.userRegByHoolo = `${config.baseUrl}api/user/reg`;
export default url;
