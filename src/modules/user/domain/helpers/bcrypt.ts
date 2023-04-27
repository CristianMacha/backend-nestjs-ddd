import * as bcrypt from 'bcrypt';

export const encrypt = async (value: string) => {
  return await bcrypt.hash(value, 10);
};

export const compare = async (value: string, hash: string) => {
  return await bcrypt.compare(value, hash);
};
