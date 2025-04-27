export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/w3images/avatar6.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/w3images/avatar6.png"],
    name: "Jesus",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/w3images/avatar6.png"],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/w3images/avatar6.png"],
    name: "Jesus",
    _id: "2",
  },
  {
    avatar: ["https://www.w3schools.com/w3images/avatar6.png"],
    name: "John Doe",
    _id: "3",
  },
  {
    avatar: ["https://www.w3schools.com/w3images/avatar6.png"],
    name: "Jesus",
    _id: "4",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/w3images/avatar6.png"],
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/w3images/avatar6.png"],
      name: "John Doe",
    },
    _id: "2",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/w3images/avatar6.png"],
      name: "John Doe",
    },
    _id: "1",
  },
];

export const sampleMessages = [
  {
    attachments: [
      {
        public_id: "sample",
        url: "https://www.w3schools.com/w3images/avatar6.png",
      },
    ],
    content: "Hello",
    _id: "1",
    sender: {
      _id: "2user._id",
      name: "John Doe",
    },
    chat: "chatId",
    createdAt: "2021-06-01T00:00:00.000Z",
  },

  {
    attachments: [
      {
        public_id: "sample2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Hello 2",
    _id: "21",
    sender: {
      _id: "kdcb",
      name: "John Doe2w",
    },
    chat: "chatId22",
    createdAt: "2021-06-01T00:00:00.000Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: "https://www.w3schools.com/w3images/avatar6.png",
      _id: "1",
      username: "johndoe123",
      friends: 100,
      groups: 10,
    },
    {
      name: "Jesus",
      avatar: "https://www.w3schools.com/w3images/avatar6.png",
      _id: "2",
      username: "jesus123",
      friends: 100,
      groups: 10,
    },
  ],
  chats: [
    {
      _id: "1",
      avatar: ["https://www.w3schools.com/w3images/avatar6.png"],
      name: "John Doe",
      groupChat: false,
      totalMembers: 100,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/w3images/avatar6.png" },
        { _id: "2", avatar: "https://www.w3schools.com/w3images/avatar6.png" },
      ],
      totalMembers: 10,
      totalMessages: 100,
      creator: {
        name: "John Doe",
        avatar: "https://www.w3schools.com/w3images/avatar6.png",
      },
    },
    {
      _id: "2",
      avatar: ["https://www.w3schools.com/w3images/avatar6.png"],
      name: "JPraul Patel",
      groupChat: false,
      totalMembers: 100,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/w3images/avatar6.png" },
        { _id: "2", avatar: "https://www.w3schools.com/w3images/avatar6.png" },
      ],
      totalMembers: 10,
      totalMessages: 100,
      creator: {
        name: "John Doe",
        avatar: "https://www.w3schools.com/w3images/avatar6.png",
      },
    },
  ],
  messages: [
    {
      attachments: [],
      content: "Laure ka msg",
      _id: "sac",
      sender: {
        avatar: "https://www.w3schools.com/w3images/avatar6.png",
        name: "sura",
      },
      groupChat: false,
      chat: "chatId",
      createdAt: "2024-02-10",
    },

    {
      attachments: [],
      content: "Laure ka msg",
      _id: "sace",
      sender: {
        avatar: "https://www.w3schools.com/w3images/avatar6.png",
        name: "sura",
      },
      groupChat: false,
      chat: "chatId",
      createdAt: "2024-02-10",
    },
  ],
};
