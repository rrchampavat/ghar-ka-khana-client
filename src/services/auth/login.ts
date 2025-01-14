import { AUTH } from "@/shared/constants/request-urls";
import { toast } from "@/ui/components/toast/use-toast";
import post from "../axios-methods/post";

export const login = async (payload: LOGIN_PAYLOAD) => {
  try {
    const response: LOGIN_RESPONSE = await post(payload, AUTH.LOGIN);

    const { data } = response;

    if (!data.success) {
      toast({
        variant: "destructive",
        title: "Login Error!",
        description: data.message
      });

      return {
        message: "",
        data: { user: {}, accessToken: "" },
        success: false
      };
    }

    return data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
