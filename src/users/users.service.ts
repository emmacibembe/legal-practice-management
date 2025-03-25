import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, email: 'admin@legaltech.com', password: bcrypt.hashSync('admin123', 10), role: 'admin' },
    { id: 2, email: 'attorney@legaltech.com', password: bcrypt.hashSync('attorney123', 10), role: 'attorney' },
  ];

  async findOneByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }
}
