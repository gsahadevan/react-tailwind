import './App.css';
import {
	FaMoon,
	FaSun,
  } from 'react-icons/fa';
import useDarkMode from './hooks/useDarkMode';

const ThemeIcon = () => {
	const [darkTheme, setDarkTheme] = useDarkMode();
	const handleMode = () => setDarkTheme(!darkTheme);
	return (
	  <span onClick={handleMode}>
		{darkTheme ? (
		//   <FaSun size='24' className='top-navigation-icon' />
		  <svg class="w-5 h-5" x-show="dark" aria-label="Apply light theme" role="image" fill="currentColor" viewBox="0 0 20 20">
				<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd">
				</path>
			</svg>
		) : (
		//   <FaMoon size='24' className='top-navigation-icon' />
		  <svg class="w-5 h-5" x-show="!dark" aria-label="Apply dark theme" role="image" fill="currentColor" viewBox="0 0 20 20">
				<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
			</svg>
		)}
	  </span>
	);
  };
function App() {
  return (
    <div id="App" class="dark:bg-gray-900 App">
  <div class="text-indigo-100 bg-indigo-700 dark:bg-gray-800 dark:text-gray-200">
    <div class="flex items-center justify-between h-16 max-w-6xl px-6 mx-auto">
      <a class="font-bold tracking-tight uppercase" href="https://gsahadevan.github.io/">Gauthaman Sahadevan</a>
      <ul class="flex items-center space-x-8 font-semibold" role="navigation">
        <li><a href="https://github.com/gsahadevan">Blog</a></li>
        <li><a href="https://github.com/gsahadevan">Projects</a></li>
        <li><a href="https://github.com/gsahadevan">Resumes</a></li>
        <li>
			<ThemeIcon />
          {/* <button class="p-2 rounded focus:outline-none" @click="dark = !dark" aria-label="Toggle theme">
            <svg class="w-5 h-5" x-show="dark" aria-label="Apply light theme" role="image" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
            <svg class="w-5 h-5" x-show="!dark" aria-label="Apply dark theme" role="image" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
          </button> */}
        </li>
        <li>
          <a class="px-6 py-2 text-orange-100 bg-orange-600 rounded-full"
            href="https://twitter.com/intent/tweet?text=Tailwind Multi Theme - The easiest way to create themes with Tailwind CSS&via=estevanmaito&url=https://tailwindcss-multi-theme.now.sh/">
            Hire Me
          </a>
        </li>
      </ul>
    </div>
  </div>
  <header class="">
    <div class="flex flex-col max-w-6xl px-6 py-16 mx-auto md:flex-row">
      <div class="flex flex-col justify-center pr-4 md:w-1/2">
        <div>
          <a class="inline-flex items-center pl-1 pr-2 mb-3 bg-indigo-100 rounded-full dark:bg-gray-800" href="https://github.com/estevanmaito/tailwindcss-multi-theme/tree/master/examples/with-alpine">
            <span class="px-2 py-px mr-2 text-xs font-bold text-indigo-100 uppercase bg-indigo-700 rounded-full">New</span>
            <span class="text-sm leading-loose text-indigo-800 dark:text-gray-300">Copy the code of this page →</span>
          </a>
        </div>
        <h1 class="text-5xl font-extrabold leading-none tracking-tight text-gray-800 lg:text-6xl dark:text-gray-400">It was never so easy to create themes</h1>
        <p class="mt-6 mb-12 text-lg text-gray-700 dark:text-gray-400">Try inspecting the elements around this page and see how effortless it is to style different themes.</p>
        <div>
          <a class="px-6 py-2 font-semibold text-orange-100 bg-orange-600 rounded-full" href="https://github.com/estevanmaito/tailwindcss-multi-theme/blob/master/README.md#-install">Read more</a>
        </div>
      </div>
      <div class="md:w-1/2">
        <img class="w-full" src="wfh_1.svg" alt="Woman working from home" />
      </div>
    </div>
  </header>

  <main>
    <div class="flex flex-col max-w-6xl px-6 mx-auto mb-16 md:flex-row">
      <div class="grid gap-8 md:grid-cols-3">
        <div class="flex items-center p-4 space-x-4 text-gray-700 rounded-lg shadow-xl dark:bg-gray-800 dark:text-gray-300">
          <div class="p-2 text-indigo-700 bg-indigo-100 rounded-full dark:text-indigo-100 dark:bg-indigo-700">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg>
          </div>
          <div>
            <h3 class="text-2xl font-semibold ">Start where you are</h3>
            <p class="">No new syntax or configuration. Start with one property.</p>
          </div>
        </div>
        <div class="flex theme-dark">
          <div class="flex items-center w-full p-4 space-x-4 text-gray-700 rounded-lg shadow-xl dark:bg-gray-800 dark:text-gray-300">
            <div class="p-2 text-indigo-700 bg-indigo-100 rounded-full dark:text-indigo-100 dark:bg-indigo-700">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            </div>
            <div>
              <h3 class="text-2xl font-semibold">This is dark!</h3>
              <p class="">You can apply themes to every element, inside themes!</p>
            </div>
          </div>
        </div>
        <div class="flex items-center p-4 space-x-4 text-gray-700 rounded-lg shadow-xl dark:bg-gray-800 dark:text-gray-300">
          <div class="p-2 text-indigo-700 bg-indigo-100 rounded-full dark:text-indigo-100 dark:bg-indigo-700">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </div>
          <div>
            <h3 class="text-2xl font-semibold ">See the code</h3>
            <p class=""><a class="text-blue-600 dark:text-blue-300" href="https://github.com/estevanmaito/tailwindcss-multi-theme/tree/master/examples/with-alpine">The code</a> for this example is available for you to copy.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}

export default App;
