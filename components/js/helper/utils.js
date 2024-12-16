export class Utils {
    static uid = 1;

    static getUId() {
        return this.uid++;
    }
}