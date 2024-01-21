import { AUTH } from "@/shared/constants/request-urls";
import post from "../axios-methods/post";
import { toast } from "@/ui/components/toast/use-toast";

interface LOGIN_RESPONSE_USER {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  contact_no: number;
  role: number;
  user_image: string | null;
}

interface LOGIN_RESPONSE_DATA {
  user: LOGIN_RESPONSE_USER;
  accessToken: string;
}

interface LOGIN_RESPONSE {
  data: {
    message: string;
    success: boolean;
    data: LOGIN_RESPONSE_DATA;
  };
  status: number;
}

export const login = async (payload: LOGIN_PAYLOAD) => {
  try {
    const response: LOGIN_RESPONSE = await post(payload, AUTH.LOGIN);

    const { data } = response;

    return data;
  } catch (error: any) {
    toast({
      variant: "destructive",
      title: "Login Error!",
      description: error?.message
    });
    throw new Error(error?.message);
  }
};
