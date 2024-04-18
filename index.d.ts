export module clarity {
    /**
     * Initialize Clarity tracking.
     * @param id This is the ID which tells Clarity which site settings it should load and where it should save the data collected.
     */
    export function init(id: string): void;
  
    /**
     * Check if Clarity has been initialized
     */
    export function hasStarted(): boolean;
  
    /**
     * Identify user
     * @param userId Unique ID of a user
     * @param properties Additional properties describing your user
     */
    export function identify(
      userId: string,
      properties: Record<string, any>
    ): void;

    /**
     * Cookie Consent
     * @param value The value for user consent
     */
    export function consent(value?: boolean): void;

    /**
     * Setup custom tags
     * @param key The tag name that identifies the kind of information you're sending
     * @param value The value attached to the tag
     */
    export function setTag(
      key: string,
      value: string
    ): void;
  
    /**
     * Upgrade Session
     * @param reason The reason of the session upgrade
     */
    export function upgrade(
      reason: string,
    ): void;

    /**
     * Stop Clarity
     */
    export function stop(): void;

    /**
     * Start Clarity
     */
    export function start(): void;
  }
  