const ROUTES = {
  HOME: {
    path: '/',
  },
  CUSTOMERS: {
    path: '/customers',
  },
  QUICK_AUDIT: {
    path: '/quick-audit',
  },
  QUICK_AUDIT_DETAILS: {
    path: '/quick-audit/:id',
    pathPrefix: '/quick-audit',
  },
  POLICY: {
    path: '/policy',
  },
}

export default ROUTES
