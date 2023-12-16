import axios from "axios";
import unauthorized from "../utility/unauthorized.js";

let BASEURL="";

export  async function BrandListRequest() {
    try {
        let result=await axios.get(BASEURL+'/api/v1/BrandList');
        let data=result.data['data'];
        return data;
    }
    catch (e) {
        return [];
    }
}

export  async function FeaturesListRequest() {
    try {
        let result=await axios.get(BASEURL+'/api/v1/FeatureList');
        let data=result.data['data'];
        return data;
    }
    catch (e) {
        return [];
    }
}

export  async function CategoryListRequest() {
    try {
        let result=await axios.get(BASEURL+'/api/v1/CategoryList');
        let data=result.data['data'];
        return data;
    }
    catch (e) {
        return [];
    }
}

export  async function ProductListByRemarkRequest(Remark) {
    try {
        let result=await axios.get(BASEURL+'/api/v1/ListByRemark/'+Remark);
        let data=result.data['data'];
        return data;
    }
    catch (e) {
        return [];
    }
}

export  async function SliderListRequest() {
    try {
        let result=await axios.get(BASEURL+'/api/v1/SliderList');
        let data=result.data['data'];
        return data;
    }
    catch (e) {
        return [];
    }
}

export  async function DetailsListRequest(id) {
    try {
        let result=await axios.get(BASEURL+'/api/v1/ListDetails/'+id);
        let data=result.data['data'];
        return data;
    }
    catch (e) {
        return [];
    }
}

export  async function ListBySmilierRequest(categoryID) {
    try {
        let result=await axios.get(BASEURL+'/api/v1/ListBySmilier/'+categoryID);
        let data=result.data['data'];
        return data;
    }
    catch (e) {
        return [];
    }
}

export  async function UserLoginRequest(email) {
    try {

        let URL=BASEURL+'/api/v1/UserLogin/'+email;
        let result=await axios.get(URL);
        let data=result.data

        return data;
    }
    catch (e) {
        return false
    }
}

export  async function VerifyLoginRequest(email,code) {
    try {

        let URL=BASEURL+'/api/v1/VerifyLogin/'+email+"/"+code;
        let result=await axios.get(URL);
        let data=result.data

        return data;
    }
    catch (e) {
        return false
    }
}

export  async function CreateWishListRequest(productID) {
    try {

        let URL=BASEURL+'/api/v1/CreateWishList';
        let reqBody={"productID":productID}
        let result=await axios.post(URL,reqBody);
        let data=result.data;
        return data;
    }
    catch (e) {
        unauthorized(e.response.status);
        return [];
    }
}

export  async function CreateCartListRequest(reqBody) {
    try {

        let URL=BASEURL+'/api/v1/CreateCartList';
        let result=await axios.post(URL,reqBody);
        let data=result.data;

        return data;
    }
    catch (e) {
        unauthorized(e.response.status);
        return [];
    }
}





export  async function WishListRequest() {
    try {
        let URL=BASEURL+'/api/v1/WishList';
        let result=await axios.get(URL);
        let data=result.data;
        return data['data'];
    }
    catch (e) {
        unauthorized(e.response.status);
        return [];
    }
}






export  async function RemoveWishListRequest(productID) {
    try {
        let URL=BASEURL+'/api/v1/RemoveWishList';
        let result=await axios.post(URL,{productID:productID});
        let data=result.data;
        return data;
    }
    catch (e) {
        unauthorized(e.response.status);
        return [];
    }
}



export  async function CartListRequest() {
    try {
        let URL=BASEURL+'/api/v1/CartList';
        let result=await axios.get(URL);
        let data=result.data;
        return data['data'];
    }
    catch (e) {
        unauthorized(e.response.status);
        return [];
    }
}



export  async function RemoveCartListRequest(productID) {
    try {
        let URL=BASEURL+'/api/v1/RemoveCartList';
        let result=await axios.post(URL,{productID:productID});
        let data=result.data;
        return data;
    }
    catch (e) {
        unauthorized(e.response.status);
        return [];
    }
}


export  async function InvoiceRequest() {
    try {
        let URL=BASEURL+'/api/v1/InvoiceCreate';
        let result=await axios.get(URL);
        let data=result.data;
        return data['message']['desc'];
    }
    catch (e) {
        unauthorized(e.response.status);
        return [];
    }
}


export  async function ListByCategoryRequest(CategoryID) {
    try {
        let URL=BASEURL+'/api/v1/ListByCategory/'+CategoryID;
        let result=await axios.get(URL);
        let data=result.data;
        return data['data'];
    }
    catch (e) {
        return [];
    }
}


export  async function ListByBrandRequest(BrandID) {
    try {
        let URL=BASEURL+'/api/v1/ListByBrand/'+BrandID;
        let result=await axios.get(URL);
        let data=result.data;
        return data['data'];
    }
    catch (e) {
        return [];
    }
}


export  async function ListByKeywordRequest(Keyword) {
    try {
        let URL=BASEURL+'/api/v1/ListByKeyword/'+Keyword;
        let result=await axios.get(URL);
        let data=result.data;
        return data['data'];
    }
    catch (e) {
        return [];
    }
}



export  async function UserLogout() {
    try {
        let URL=BASEURL+'/api/v1/UserLogout';
        let result=await axios.get(URL);
        if(result.data['status']==="success")
        return true
    }
    catch (e) {
        unauthorized(e.response.status);
        return false
    }
}

