import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server } from "../../constants/config";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${server}`,
  }),
  tagTypes: [
    "Chat",
    "User",
    "Message",
    "Dashboard-stats",
    "Dashboard-users",
    "Dashboard-chats",
    "Dashboard-messages",
  ],
  endpoints: (builder) => ({
    myChats: builder.query({
      query: () => ({
        url: "/chats/my",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Chat"],
    }),
    searchUser: builder.query({
      query: (name) => ({
        url: `/users/search?name=${name}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["User"],
    }),
    sendFriendRequest: builder.mutation({
      query: (data) => ({
        url: "/users/sendrequest",
        method: "PUT",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    getNotifications: builder.query({
      query: () => ({
        url: "/users/notifications",
        method: "GET",
        credentials: "include",
      }),
      keepUnusedDataFor: 0, //no caching
    }),
    acceptFriendRequest: builder.mutation({
      query: (data) => ({
        url: "/users/acceptrequest",
        method: "PUT",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["Chat"],
    }),
    getChatDetails: builder.query({
      query: ({ chatId, populate = false }) => {
        let url = `/chats/${chatId}`;
        if (populate) url += "?populate=true";

        return {
          url,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["Chat"],
    }),
    getMessages: builder.query({
      query: ({ chatId, page }) => ({
        url: `/chats/message/${chatId}?page=${page}`,
        method: "GET",
        credentials: "include",
      }),
      keepUnusedDataFor: 0,
    }),
    sendAttachments: builder.mutation({
      query: (data) => ({
        url: "/chats/message",
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
    myGroups: builder.query({
      query: () => ({
        url: "/chats/my/groups",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Chat"],
    }),
    availableFriends: builder.query({
      query: (chatId) => {
        let url = `/users/friends`;
        if (chatId) url += `?chatId=${chatId}`;

        return {
          url,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["Chat"],
    }),
    newGroup: builder.mutation({
      query: ({ name, members }) => ({
        url: "/chats/new",
        method: "POST",
        credentials: "include",
        body: { name, members },
      }),
      invalidatesTags: ["Chat"],
    }),
    renameGroup: builder.mutation({
      query: ({ chatId, name }) => ({
        url: `/chats/${chatId}`,
        method: "PUT",
        credentials: "include",
        body: { chatId, name },
      }),
      invalidatesTags: ["Chat"],
    }),
    removeGroupMember: builder.mutation({
      query: ({ chatId, userId }) => ({
        url: `/chats/removemember`,
        method: "PUT",
        credentials: "include",
        body: { chatId, userId },
      }),
      invalidatesTags: ["Chat"],
    }),
    addGroupMembers: builder.mutation({
      query: ({ members, chatId }) => ({
        url: `/chats/addmembers`,
        method: "PUT",
        credentials: "include",
        body: { members, chatId },
      }),
      invalidatesTags: ["Chat"],
    }),
    deleteChat: builder.mutation({
      query: (chatId) => ({
        url: `/chats/${chatId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Chat"],
    }),
    leaveGroup: builder.mutation({
      query: (chatId) => ({
        url: `/chats/leave/${chatId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Chat"],
    }),

    //admin apis
    dashboardStats: builder.query({
      query: () => ({
        url: "/admin/stats",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Dashboard-stats"],
    }),
    userStats: builder.query({
      query: () => ({
        url: "/admin/users",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Dashboard-users"],
    }),
    chatStats: builder.query({
      query: () => ({
        url: "/admin/chats",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Dashboard-chats"],
    }),
    messageStats: builder.query({
      query: () => ({
        url: "/admin/messages",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Dashboard-messages"],
    }),
  }),
});

export default api;
export const {
  useMyChatsQuery,
  useLazySearchUserQuery,
  useSendFriendRequestMutation,
  useGetNotificationsQuery,
  useAcceptFriendRequestMutation,
  useGetChatDetailsQuery,
  useGetMessagesQuery,
  useSendAttachmentsMutation,
  useMyGroupsQuery,
  useAvailableFriendsQuery,
  useNewGroupMutation,
  useRenameGroupMutation,
  useRemoveGroupMemberMutation,
  useAddGroupMembersMutation,
  useDeleteChatMutation,
  useLeaveGroupMutation,
  useDashboardStatsQuery,
  useUserStatsQuery,
  useChatStatsQuery,
  useMessageStatsQuery,
} = api;
