
import { quanlyPhimService } from "../../services/QuanLyPhimService"
import { SET_CAROUSEL } from "../types/CarouselType"


export const getCarouselAction =()=>{

    return async (dispatch) =>{

        try{
          const result = await  quanlyPhimService.layDanhSachBanner()
    
          dispatch({
            type: SET_CAROUSEL,
            arrImg: result.data.content
          })
    
        }catch(errors){
          console.log(errors)
        }
    
      }



} 