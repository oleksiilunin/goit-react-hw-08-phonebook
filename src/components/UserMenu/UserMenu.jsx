import { FiLogOut } from 'react-icons/fi';

import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import {
  UserMenuButton,
  UserMenuContainer,
  UserMenuText,
} from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <UserMenuText>{user.name}</UserMenuText>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        <FiLogOut size="20" />
        Logout
      </UserMenuButton>
    </UserMenuContainer>
  );
}
