export interface User {
  id: string;
  email: string;
  role: string;
  tenantId: string;
  tenant?: Tenant;
}

export interface Tenant {
  id: string;
  slug: string;
  name: string;
  subscription: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  userId: string;
  tenantId: string;
  createdAt: string;
  updatedAt: string;
}

