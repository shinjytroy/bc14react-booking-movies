import Axios from "axios";
import { DOMAIN, TOKEN_CYBERSOFT } from "../ultil/settings/config";

export class baseService {
  put = (url, model) => {
    const TOKEN = localStorage.getItem("accessToken")
      ? localStorage.getItem("accessToken")
      : null;
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        TokenCybersoft: TOKEN_CYBERSOFT + localStorage.getItem(TOKEN),
      },
    });
  };

  post = (url, model) => {
    const TOKEN = localStorage.getItem("accessToken")
      ? localStorage.getItem("accessToken")
      : null;
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        TokenCybersoft: TOKEN_CYBERSOFT + localStorage.getItem(TOKEN),
      },
    });
  };

  get = (url) => {
    const TOKEN = localStorage.getItem("accessToken")
      ? localStorage.getItem("accessToken")
      : null;
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        TokenCybersoft: TOKEN_CYBERSOFT + localStorage.getItem(TOKEN),
      },
    });
  };

  delete = (url) => {
    const TOKEN = localStorage.getItem("accessToken")
      ? localStorage.getItem("accessToken")
      : null;
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        TokenCybersoft: TOKEN_CYBERSOFT + localStorage.getItem(TOKEN),
      },
    });
  };
}
