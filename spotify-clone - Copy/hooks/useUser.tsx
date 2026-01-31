import { createContext, useContext } from 'react';

import { UserDetails, Subscription } from '@/types';

type User = {
  id: string;
  email: string;
};

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
  subscription: Subscription | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
  // Demo mode: stub user data
  const value = {
    accessToken: 'demo-token',
    user: {
      id: '1',
      email: 'demo@example.com'
    },
    userDetails: {
      id: '1',
      first_name: 'Demo',
      last_name: 'User',
      full_name: 'Demo User',
      avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Demo'
    },
    isLoading: false,
    subscription: null
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a MyUserContextProvider.`);
  }
  return context;
};
