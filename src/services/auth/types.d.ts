type LOGIN_RESPONSE_USER = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  contact_no: number;
  role: number;
  user_image: string | null;
};

type LOGIN_RESPONSE_DATA = {
  user: LOGIN_RESPONSE_USER;
  accessToken: string;
};

type LOGIN_RESPONSE = {
  data: {
    message: string;
    success: boolean;
    data: LOGIN_RESPONSE_DATA;
  };
  status: number;
};
