import axios, { AxiosError, AxiosResponse } from "axios";

export default async (url: string) => {
  let data: any = null;
  let error: string | null = null;
  let status: number | null = null;

  await axios
    .get(url)
    .then((res: AxiosResponse) => {
      data = res.data;
      status = res.status;
    })
    .catch((err: AxiosError) => {
      error = err.message as string;
      status = err.response?.status as number;
    });

  return { data, error, status };
};
