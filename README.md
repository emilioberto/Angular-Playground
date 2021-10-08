# Angular playground

# Primitive types extensions 

``` 
  interface String {
    isNullOrEmpty(this: string): boolean;
  }

  interface Array<T> {
    isNullOrEmpty(this: Array<T>): boolean;
    emptyIfNull(this: Array<T>): Array<T>;
  } 
``` 

# Global functions

```function emptyIfNull<T>(arr: Array<T>): Array<T>;```
