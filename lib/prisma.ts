// Tymczasowy stub - będzie zastąpiony prawdziwym klientem po migracji do Prisma 5
export const prisma = {
  user: {
    findUnique: async () => null,
    findMany: async () => [],
    create: async (data: any) => ({ id: "stub", ...data.data }),
    update: async () => null,
    delete: async () => null,
  },
  userProfile: {
    findUnique: async () => null,
    create: async (data: any) => ({ id: "stub", ...data.data }),
    update: async () => null,
  },
  service: {
    findUnique: async () => null,
    findMany: async () => [],
    create: async (data: any) => ({ id: "stub", ...data.data }),
  },
  booking: {
    findUnique: async () => null,
    findMany: async () => [],
    findFirst: async () => null,
    create: async (data: any) => ({ id: "stub", ...data.data }),
    update: async () => null,
    updateMany: async () => null,
  },
  payment: {
    findUnique: async () => null,
    findMany: async () => [],
    create: async (data: any) => ({ id: "stub", ...data.data }),
    update: async () => null,
    updateMany: async () => null,
  },
  calendarEvent: {
    findMany: async () => [],
    create: async (data: any) => ({ id: "stub", ...data.data }),
  },
  contactMessage: {
    findMany: async () => [],
    create: async (data: any) => ({ id: "stub", ...data.data }),
  },
  availability: {
    findMany: async () => [],
  },
  $connect: async () => {},
  $disconnect: async () => {},
} as any;
