use napi_derive::napi;

#[napi]
fn sum(a: f64, b: f64) -> f64 {
  a + b
}

#[napi]
fn fibonacci(n: u32) -> u32 {
  match n {
    1 | 2 => 1,
    _ => fibonacci(n-1) + fibonacci(n - 2)
  }
}
