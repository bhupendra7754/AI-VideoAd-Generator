import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://13ebd9e496f17c4802c63d97d05a6cd6@o4510935182278656.ingest.us.sentry.io/4510935192829952",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});