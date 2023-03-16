export function preventScroll(){
  if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
}

export function resumeScroll() {
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "";
  }
}