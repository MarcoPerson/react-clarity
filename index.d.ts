export module clarity {
    /**
     * Initialize Clarity tracking.
     * @param id This is the ID which tells Clarity which site settings it should load and where it should save the data collected.
     */
    export function initialize(id: string): void;
  
    /**
     * Check if Clarity has been initialized
     */
    export function initialized(): boolean;
  
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
     * Upgrade Session
     * @param reason The reason of the session upgrade
     */
    export function upgrade(
      reason: string,
    ): void;
  }
  