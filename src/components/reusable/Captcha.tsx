import { LoadCanvasTemplate } from 'react-simple-captcha';
import { useCaptcha } from '../../hooks/useCaptcha'

interface CaptchaProps {
  onChange?: (value: string) => void;
}

export const Captcha = ({ onChange }: CaptchaProps) => {
  const { captchaInput, setCaptchaInput, error } = useCaptcha();

  return (
    <div className="flex flex-col items-center gap-4">
      <LoadCanvasTemplate 
        className="transform rotate-3 scale-110 skew-x-3 skew-y-1 filter blur-sm"
      />
      <input
        type="text"
        placeholder="Enter captcha" 
        value={captchaInput}
        onChange={(e) => {
          setCaptchaInput(e.target.value);
          onChange?.(e.target.value);
        }}
        className="rounded-xl p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-700 text-slate-900 dark:text-white w-full"
        required
      />
      {error && <p className="text-red-500 font-semibold">{error}</p>}
    </div>
  );
  
}
