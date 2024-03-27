// __tests__/login.test.js

const { expect } = require('chai');

// Hàm kiểm tra đăng nhập
function login(username, password) {
  // Thực hiện logic đăng nhập
  // return true nếu đăng nhập thành công, ngược lại return false
}

// Test cases
describe('Login Form', () => {
  it('should return true for valid credentials', () => {
    const result = login('example_user', 'password123');
    expect(result).to.be.true;
  });

  it('should return false for invalid credentials', () => {
    const result = login('invalid_user', 'wrong_password');
    expect(result).to.be.false;
  });

  it('should handle empty username or password', () => {
    const result1 = login('', 'password123');
    const result2 = login('example_user', '');

    expect(result1).to.be.false;
    expect(result2).to.be.false;
  });
});
