interface EnvironmentConfig {
    testEnvironment: string;
    stagingEnvironment: string;
    productionEnvironment: string;
}

const config: EnvironmentConfig = {
    testEnvironment: 'http://localhost:5173/',
    stagingEnvironment: 'https://staging.example.com/',
    productionEnvironment: 'https://www.example.com/',
};

export default config;
