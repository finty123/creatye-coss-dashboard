type LogLevel = "info" | "warn" | "error";

export interface LoggerOptions {
  service: string;
  environment: string;
}

export interface LogContext {
  [key: string]: string | number | boolean | readonly string[] | undefined;
}

export function createLogger(options: LoggerOptions) {
  const write = (level: LogLevel, message: string, context: LogContext = {}) => {
    const payload = {
      level,
      service: options.service,
      environment: options.environment,
      message,
      context,
      timestamp: new Date().toISOString()
    };

    console.log(JSON.stringify(payload));
  };

  return {
    info: (message: string, context?: LogContext) => write("info", message, context),
    warn: (message: string, context?: LogContext) => write("warn", message, context),
    error: (message: string, context?: LogContext) => write("error", message, context)
  };
}
