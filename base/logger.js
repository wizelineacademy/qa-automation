/**
 * This class will be used to track each step of the test execution, in order to clearly 
 * identify what is the automation performing.
 * This would be useful when there is an ongoing test execution 
 * @class Logger
 */
class Logger {
    constructor()
    {
        this.cacheSteps = []
    }

    setTest(testName) {            
        this.cacheSteps = [
          "\nSteps to Reproduce:",     
        ];            
        console.log(`   **Test: ${testName}`);
        return testName;
    }    
    /**
   * This function will add a console message with One indentation tab to display Steps of what is the automation performing
   * 
   * @
   * @param {any} text 
   */
    step(text) {
        console.log(`    -${text}`)
        this.cacheSteps.push(`-${text}`)
    }

    /**
     * This function will only clean up the set of steps 
     *     
     */
    cleanCache() {
        console.log('\n-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --');
        this.cacheSteps = [
            "\nSteps to Reproduce:"
        ];
    }

    /**
  * This function will add a console message with One indentation tab to display Steps of what is the automation performing
  *   
  * @param {any} text 
  */
    subStep(text) {
        console.log(`    *${text}`)
        this.cacheSteps.push(`    *${text}`)
    }

    /**
     *          
     * @param {string} [description=''] 
     * @returns 
     * @memberof Logger
     */
    testFailed(description = '') {
        if (description != '') {
            this.cacheSteps.splice(0, 1,
                `\n -- Description: -- \n ${description} \n  -- Steps to Reproduce: -- `)
        }
        return this.cacheSteps.join("\n")
    }
}

module.exports = new Logger;