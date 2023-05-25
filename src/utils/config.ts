export const config = {
  baseUrl: {
    api: process.env.NEXT_PUBLIC_API_BASE_URL || '',
    images: process.env.NEXT_PUBLIC_IMAGE_BASE_URL || '',
  },
  families: {
    max_content_quantity: Number(process.env.NEXT_PUBLIC_MAX_CONTENT_QUANTITY) || 0,
  },
  env: process.env.NODE_ENV,
};
