/* eslint-disable @typescript-eslint/naming-convention */
import { SERVER_URL } from "@/shared/constants/envVars";

import axios from "axios";

const post = async (payload: any, requestURL: string) => {
  try {
    const response = await axios.post(`${SERVER_URL}${requestURL}`, payload, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const { data, status } = response;

    return { data, status };
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

export default post;
