export const GET = {
  category: {
    all: '/api/items/categories',
    search: '/api/items/category/',
  },
  items: {
    all: '/api/items',
    search: '/api/items/search/',
    searchByCategory: '/api/items/category/',
  },
};

export const POST = {
  items: {
    create: '/api/items',
  },
};

export const PUT = {
  items: {
    update: '/api/items/',
  },
};

export const DELETE = {
  items: {
    delete: '/api/items/',
  },
};
