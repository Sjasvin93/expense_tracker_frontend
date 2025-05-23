export const BASE_URL="http://localhost:8090"

export const API_PATHS = {
    AUTH:{
        LOGIN:"/api/v1/user/login-user",
        REGISTER:"/api/v1/user/register-user",
        GET_USER_INFO: (userId) => `/api/v1/user/user-info/${userId}`
    },
    DASHBOARD:{
        GET_DATA: "/api/v1/dashboard/"
    },
    INCOME:{
        ADD_INCOME:"/api/v1/income/create-income",
        GET_ALL_INCOME: "/api/v1/income/get-all-income",
        DELETE_INCOME:(incomeId) => `api/v1/income/delete-income/${incomeId}`,
        DOWNLOAD_INCOME: `/api/v1/income/downloadexcel`
    },
    EXPENSE:{
        ADD_EXPENSE:'/api/v1/expense/create-expense',
        GET_ALL_EXPENSE:'/api/v1/expense/get-all-expenses',
        DELETE_EXPENSE:(expenseId) => `/api/v1/expense/delete-expense/${expenseId}`,
        DOWNLOAD_EXPENSE: '/api/v1/expense/download-expenses'
    },
    IMAGE: {
        UPLOAD_IMAGE: '/api/v1/user/upload-image'
    }
}