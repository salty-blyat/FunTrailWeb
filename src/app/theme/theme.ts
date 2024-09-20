import { ThemeConfig } from "antd";

const primary = "#09090b";
const secondary = "#fff";

const theme: ThemeConfig = {
  components: {
    Button: {
      primaryColor: secondary,
      colorPrimaryActive: primary,
      colorPrimaryBorder: primary,
      colorPrimaryText: primary,
      colorPrimary: primary,  
      colorPrimaryBorderHover: primary,
      colorPrimaryBgHover: primary,
      colorPrimaryHover: primary,
      colorPrimaryTextHover: primary,

    }, 
    Input: {
      colorBgContainer: secondary, 
      colorBorder: primary,
      hoverBorderColor: primary,
      colorBgBlur: primary
      
    }
  },
  token: {
    fontSize: 11,
  },
};

export default theme;
