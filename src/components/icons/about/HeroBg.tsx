function HeroBg({ flip }: { flip: boolean }) {
  return (
    <svg
      width={120}
      height={96}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={flip ? "-scale-x-100" : ""}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.885 75.403h8.712v8.712a8.712 8.712 0 11-8.712-8.712zm0 20.597C5.321 96 0 90.679 0 84.115c0-6.565 5.321-11.886 11.885-11.886h11.886v11.886C23.77 90.679 18.45 96 11.885 96zm15.06-20.597h8.711a8.712 8.712 0 11-8.711 8.712v-8.712zm20.597 8.712C47.542 90.679 42.22 96 35.656 96c-6.564 0-11.885-5.321-11.885-11.885V72.229h11.885c6.565 0 11.886 5.321 11.886 11.886zm-35.657-15.06h8.712v-8.711a8.712 8.712 0 10-8.712 8.711zm0-20.597C5.321 48.458 0 53.78 0 60.344c0 6.564 5.321 11.885 11.885 11.885h11.886V60.344c0-6.565-5.321-11.886-11.886-11.886zm15.06 20.597h8.711a8.712 8.712 0 100-17.423 8.712 8.712 0 00-8.711 8.712v8.711zm20.597-8.711c0-6.565-5.322-11.886-11.886-11.886-6.564 0-11.885 5.321-11.885 11.886v11.885h11.885c6.565 0 11.886-5.321 11.886-11.885zm45.845-15.11h-8.852a8.852 8.852 0 118.852-8.852v8.852zm-20.928-8.852c0-6.67 5.406-12.077 12.076-12.077-6.67 0-12.076-5.406-12.076-12.076 0 6.67-5.407 12.076-12.077 12.076 6.67 0 12.077 5.407 12.077 12.077zm0 0c0 6.67-5.407 12.076-12.077 12.076H48.306V36.382c0-6.67 5.407-12.077 12.076-12.077-6.67 0-12.076-5.406-12.076-12.076V.153h12.076c6.67 0 12.077 5.406 12.077 12.076 0-6.67 5.406-12.076 12.076-12.076h12.077v12.076c0 6.67-5.407 12.076-12.077 12.076 6.67 0 12.077 5.407 12.077 12.077v12.076H84.535c-6.67 0-12.076-5.407-12.076-12.076zm-48.688.19c0-6.564 5.321-11.885 11.885-11.885-6.564 0-11.885-5.321-11.885-11.886 0 6.565-5.321 11.886-11.886 11.886 6.565 0 11.886 5.321 11.886 11.885zM11.885 24.687C5.322 24.687 0 19.366 0 12.801V.917h11.886c6.564 0 11.885 5.321 11.885 11.886C23.77 6.237 29.092.916 35.656.916h11.886v11.886c0 6.564-5.322 11.885-11.886 11.885 6.565 0 11.886 5.321 11.886 11.885v11.886H35.656c-6.564 0-11.885-5.322-11.885-11.886 0 6.564-5.321 11.886-11.886 11.886H0V36.572c0-6.564 5.321-11.885 11.886-11.885zm72.65-21.31h8.852v8.852a8.852 8.852 0 11-8.852-8.852zM51.531 45.234h8.851a8.852 8.852 0 10-8.851-8.852v8.852zm8.851-41.857h-8.851v8.852a8.852 8.852 0 108.851-8.852zm39.352 17.71h8.571a8.571 8.571 0 008.572-8.572 8.571 8.571 0 00-8.572-8.571 8.571 8.571 0 00-8.571 8.572v8.571zM120 12.515C120 6.057 114.764.821 108.305.821c-6.458 0-11.694 5.236-11.694 11.694V24.21H108.305c6.459 0 11.695-5.236 11.695-11.695zm-11.694 2.868h-2.868v-2.868a2.868 2.868 0 112.868 2.868zm0-8.858a5.99 5.99 0 010 11.98h-5.991v-5.99a5.99 5.99 0 015.991-5.99z"
        fill="#F9B20B"
      />
    </svg>
  );
}

export default HeroBg;
