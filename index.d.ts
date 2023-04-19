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
     * @param sessionId - Optional ID for the user's session.
     * @param pageId - Optional ID for the current page.
     */
    export function identify(
      userId: string,
      sessionId?: string,
      pageId?: string
    ): void;

    /**
     * Cookie Consent
     */
    export function consent(): void;

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
  }
  