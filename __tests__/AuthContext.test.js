import { renderHook, act } from '@testing-library/react';
import { AuthProvider, useAuth } from '../auth/AuthContext';

const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;

describe('AuthContext', () => {
  it('initially not authenticated', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    expect(result.current.user).toBeNull();
  });

  it('sets user on login', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.login('test@example.com', 'password');
    });

    expect(result.current.user).toBeTruthy();
  });
});
