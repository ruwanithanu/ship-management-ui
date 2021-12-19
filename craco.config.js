const path = require("path");

module.exports = {
  typescript: {
    resolveJsonModule: true,
    exclude: ['node_modules']
  },
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@/utils': path.resolve(__dirname, 'src/utils/'),
      '@views': path.resolve(__dirname, 'src/components/views/'),
      '@types': path.resolve(__dirname, 'src/types/'),
      '@/types': path.resolve(__dirname, 'src/types/'),
      '@api': path.resolve(__dirname, 'src/api/'),
      '@/api': path.resolve(__dirname, 'src/api/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@/(.*)$': path.resolve(__dirname, 'src/$1')
    }
  },
  jest: {
    configure: {
      testPathIgnorePatterns: ['<rootDir>/node_modules/'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      resetMocks: false,
      moduleNameMapper: {
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        '^@test-utils/(.*)$': '<rootDir>/src/test-utils/$1',
        '^@/test-utils/(.*)$': '<rootDir>/src/test-utils/$1',
        '^@context/(.*)$': '<rootDir>/src/context/$1',
        '^@api/(.*)$': '<rootDir>/src/api/$1',
        '^@assets/(.*)$': '<rootDir>/src/assets/$1',
        '^@types/(.*)$': '<rootDir>/src/types/$1',
        '^@views/(.*)$': '<rootDir>/src/components/views/$1',
        '^@/(.*)$': '<rootDir>/src/$1'
      }
    }
  }
};