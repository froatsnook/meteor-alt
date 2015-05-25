desc "Update package"
task :update do
  require "open-uri"
  version = open("https://raw.githubusercontent.com/goatslacker/alt/master/package.json", "r") do |f|
    content = f.read
    m = content.match(/"version": "(.*)"/)
    exit 1 unless m
    m[1]
  end

  current_version = open("package.js") do |f|
    content = f.read
    m = content.match(/version: "(.*)"/)
    exit 1 unless m
    m[1]
  end

  if version == current_version
    puts "up to date"
    exit 0
  end

  puts "Found new version #{version}"

  js = open("https://raw.githubusercontent.com/goatslacker/alt/master/dist/alt-with-addons.js", "r") do |f|
    content = f.read
    if content.length < 50*1024 or content.length > 200*1024
      puts "Wrong content?  Length=#{content.length/1024}K, expected ~86K"
      puts "https://raw.githubusercontent.com/goatslacker/alt/master/dist/alt-with-addons.js"
      exit 0
    end

    content
  end

  puts "Writing lib/00-alt.js"
  File.open("lib/00-alt.js", "w") do |f|
    f.write(js)
  end

  puts "Updating version in package.js"
  sh "perl -p -i -e 's/#{current_version}/#{version}/g' package.js"
end

