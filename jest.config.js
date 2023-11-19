module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
      '@testing-library/react/dont-cleanup-after-each',
      '@testing-library/jest-dom/extend-expect',
    ],
    moduleDirectories: ['node_modules', 'src'],
    transform: {
      '^.+\\.tsx?$': 'esbuild-jest',
    },
  };