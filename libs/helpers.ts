// Demo mode: stub helpers
export const getURL = () => {
  return typeof window !== 'undefined' ? window.location.origin : '';
};

export const postData = async ({
  url,
  data
}: {
  url: string;
  data?: { price: any };
}) => {
  // Demo mode: stub implementation
  console.log('postData called (demo mode)', url, data);
  return { sessionId: 'demo-session', url: '/' };
};

export const toDateTime = (secs: number) => {
  const t = new Date('1970-01-01T00:30:00Z');
  t.setSeconds(secs);
  return t;
};
