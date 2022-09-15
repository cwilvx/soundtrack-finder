import { InjectionKey, Ref } from "vue";

export default Symbol() as InjectionKey<{
  query: Ref<string>;
  updateInput: (newValue: string) => void;
}>;
