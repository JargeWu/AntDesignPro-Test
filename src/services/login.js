import request from '@/utils/request';
import {Constants} from "@/utils/constant";

export async function fakeAccountLogin(params) {
  return request(`${Constants.baseUrl}/ApiTest/`, {
    method: 'POST',
    data: JSON.stringify(params),
    headers: {'Content-Type': 'application/json;charset=UTF-8'},
  });
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
