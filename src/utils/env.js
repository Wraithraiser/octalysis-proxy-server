import dotenv from 'dotenv';

function initEnvVar() {
  if (process.env.NODE_ENV === 'production') return;
  const result = dotenv.config('.env');

  if (result.error) {
    console.error(result.error);
  }
}

export { initEnvVar };
