import { AuthContext } from "../contexts/AuthContext";
import { useContext } from 'react';

type UseCanParams = {
  subscriptions: string[];
  permissions: string[];
}

export function useCan({ subscriptions, permissions }: UseCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) {
    return false;
  }

  if (subscriptions?.length > 0) {
    const hasAllSubscriptions = subscriptions.some(subscription => {
      return user.subscriptions.includes(subscription)
    });

    if (!hasAllSubscriptions) {
      return false;
    }
  }


  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.some(permission => {
      return user.permissions.includes(permission)
    });

    if (!hasAllPermissions) {
      return false;
    }

  }

  return true;
}