import { supabase } from "@/utils/supabase/client";
import { TReviewMessage } from "@/types/review";
import { v4 as uuidv4 } from "uuid";

export const getModalReview = async () => {
  const { data, error } = await supabase
    .from("review_messages")
    .select("*")
    .order("date", { ascending: false })
    .range(0, 4);
  if (error) throw error;
  return data as TReviewMessage[];
};

export const getReview = async (page: number = 0) => {
  const from = page * 9;
  const to = from + 8;
  const { data, error } = await supabase
    .from("review_messages")
    .select("*")
    .order("date", { ascending: false })
    .range(from, to);
  if (error) throw error;
  return {
    data: data as TReviewMessage[],
    hasMore: data?.length === 9,
  };
};

export const addReview = async ({
  author,
  message,
}: {
  author: string;
  message: string;
}) => {
  const { data, error } = await supabase.from("review_messages").insert([
    {
      id: uuidv4(),
      author,
      message,
      date: new Date().toISOString(),
      likes: 0,
    },
  ]);
  if (error) throw error;
  return data;
};

export const deleteReview = async (id: string) => {
  const { data, error } = await supabase
    .from("review_messages")
    .delete()
    .eq("id", id);
  if (error) throw error;
  return data;
};

export const likeReview = async (id: string) => {
  const { data, error } = await supabase.rpc("increment_likes", { row_id: id });
  if (error) throw error;
  return data;
};
