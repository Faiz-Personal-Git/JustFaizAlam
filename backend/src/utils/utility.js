export const resolveEnv = (key) => {
    return process.env[key] ?? "";
}